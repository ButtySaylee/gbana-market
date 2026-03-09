"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Loader2 } from "lucide-react";
import OpportunityCard from "@/components/OpportunityCard";
import { Opportunity } from "@/types";

interface OpportunitiesGridProps {
  initialOpportunities: Opportunity[];
  totalItems: number;
  itemsPerPage: number;
  typeFilter: string;
  searchQuery: string;
}

export default function OpportunitiesGrid({
  initialOpportunities,
  totalItems,
  itemsPerPage,
  typeFilter,
  searchQuery,
}: OpportunitiesGridProps) {
  const [opportunities, setOpportunities] = useState<Opportunity[]>(initialOpportunities);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Keep client state aligned with server results when filters/search change.
  useEffect(() => {
    setOpportunities(initialOpportunities);
    setPage(1);
  }, [initialOpportunities, typeFilter, searchQuery, itemsPerPage]);

  const hasMore = opportunities.length < totalItems;

  function isNew(createdAt: string): boolean {
    return Date.now() - new Date(createdAt).getTime() < 24 * 60 * 60 * 1000;
  }

  async function loadMore() {
    setLoading(true);
    const nextPage = page + 1;
    const params = new URLSearchParams();
    params.set("page", nextPage.toString());
    if (typeFilter !== "all") params.set("type", typeFilter);
    if (searchQuery) params.set("q", searchQuery);

    try {
      const res = await fetch(`/api/opportunities/list?${params}`);
      const data = (await res.json()) as { opportunities: Opportunity[] };
      setOpportunities((prev) => [...prev, ...data.opportunities]);
      setPage(nextPage);
    } finally {
      setLoading(false);
    }
  }

  if (opportunities.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-2xl mb-2">🔍</p>
        <h2 className="text-lg font-bold text-slate-700 mb-1">No opportunities found</h2>
        <p className="text-slate-400 text-sm">Check back soon or try a different filter.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {opportunities.map((opp) => (
          <OpportunityCard key={opp.id} opportunity={opp} isNew={isNew(opp.created_at)} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 mb-4">
            Showing {opportunities.length} of {totalItems} opportunities
          </p>
          <button
            onClick={loadMore}
            disabled={loading}
            className="inline-flex items-center gap-2 bg-white text-[#002147] border-2 border-[#002147] font-semibold px-6 py-3 rounded-full shadow hover:bg-[#002147] hover:text-white transition-all disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Load More
              </>
            )}
          </button>
        </div>
      )}
    </>
  );
}
