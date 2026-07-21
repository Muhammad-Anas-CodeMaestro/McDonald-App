import { useState } from 'react';
import slider from '/slider.png';
import search from '/search.png';
import TicketFormFields from '../form/TicketFormFields.jsx';

/**
 * ConfigPageHeader
 *
 * A focused header for configuration / settings pages.
 * Renders a collapsible filter bar and an "+ Add New" button.
 * It is completely decoupled from any modal or form — the parent
 * page is responsible for opening a modal when `onAddNew` fires.
 *
 * Props
 * ──────────────────────────────────────────────────────────────
 * @prop {Array}    filterFields   - Field definitions for the filter bar.
 *                                   Pass an empty array to hide the filter icon.
 * @prop {Object}   filterData     - Controlled state object for filter fields.
 * @prop {Function} onFilterChange - `(fieldName) => (e) => void`  handler.
 * @prop {Function} onFilterApply  - Called when the "Filter" button is clicked.
 * @prop {Function} onAddNew       - Called when "+ Add New" is clicked.
 * @prop {string}  [addNewLabel]   - Label for the add button. Default: "Add New".
 *
 * @example
 *   <ConfigPageHeader
 *     filterFields={[]}
 *     filterData={{}}
 *     onFilterChange={() => () => {}}
 *     onFilterApply={() => {}}
 *     onAddNew={() => setModalOpen(true)}
 *   />
 */
export default function ConfigPageHeader({
  filterFields = [],
  filterData = {},
  onFilterChange,
  onFilterApply,
  onAddNew,
  addNewLabel = 'Add New',
}) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const hasFilters = filterFields.length > 0;

  return (
    <div className="w-full">
      {/* ── Top bar ─────────────────────────────────────────────── */}
      <div className="flex items-center justify-end gap-3 border-b border-slate-200 pb-2">

        {/* Filter toggle — only shown when filter fields are provided */}
        {hasFilters && (
          <button
            type="button"
            aria-label="Toggle filters"
            onClick={() => setIsFilterOpen((prev) => !prev)}
            className="flex items-center justify-center rounded p-1 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <img src={slider} alt="filter" />
          </button>
        )}

        {/* Add New button */}
        <button
          id="config-add-new-btn"
          type="button"
          onClick={onAddNew}
          className="flex items-center gap-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition-colors cursor-pointer select-none"
        >
          <span className="text-base leading-none font-bold">+</span>
          {addNewLabel}
        </button>
      </div>

      {/* ── Collapsible filter bar ───────────────────────────────── */}
      {hasFilters && (
        <div
          className={`grid w-full overflow-hidden min-h-0 transition-all duration-500 ease-in-out ${
            isFilterOpen
              ? 'grid-rows-[1fr] opacity-100 py-3'
              : 'grid-rows-[0fr] opacity-0 py-0'
          }`}
        >
          <div className="overflow-hidden flex flex-wrap items-end gap-3 border-b border-slate-200 bg-white p-3">
            <TicketFormFields
              fields={filterFields}
              formData={filterData}
              onFieldChange={onFilterChange}
              className="grid-cols-1 gap-4 md:grid-cols-2"
            />
            <button
              type="button"
              onClick={onFilterApply}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 px-4 text-sm font-semibold transition-colors cursor-pointer"
            >
              <img src={search} alt="search" />
              Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
