---
outline: deep
---

# Export supporters

Your campaign data is your most important asset. With voces.ch, you always keep full control and can download supporters as files (for example CSV or Excel) for your CRM or newsletter workflows.

You have two export options.

## 1. Export a single campaign

If you need signatures from one specific campaign:

1. Open the campaign in backend detail view.
2. Click **Export**.
3. You get a file containing only signers from that campaign.

## 2. Global export (all campaigns)

If you need a broader export across campaigns:

1. In the left menu, go to **Data** and click **Signatures**.
2. You will see a global table of all signatures for your organization.
3. Select entries (or all) and start export.

## Export behavior for custom fields

During export, you can choose which custom fields appear as columns. Two important details:

### Merged columns (same internal key)

If different campaigns use custom fields with the **exact same internal key** (for example `zip_code`), voces merges them into one export column. This keeps exports clean and avoids duplicate columns.

### Empty cells (different campaign usage)

Because global export can include fields not used in every campaign, empty cells are normal.

Example: If you include field `phone_number` used only in campaign A, rows from campaign B will have empty values in that column.
