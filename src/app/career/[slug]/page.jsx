import { createClient } from "contentful";
import CareerViewBanner from "../career-component/career-view-banner";
import CareerViewResponsibility from "../career-component/career-view-responsibility";
import CareerForm from "../career-component/career-form";

export default async function ViewCareerListing({ params }) {
  const { slug } = await params; // Await params to access slug

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const entries = await client.getEntries({
    content_type: "job",
    "fields.slug": slug, // Use the awaited slug
    limit: 1,
  });

  const job = entries.items.length ? entries.items[0].fields : null;

  return (
    <>
      <CareerViewBanner
        title={job?.title || "No title"}
        employmentType={job?.employmentType || "FULL TIME"}
      />
      <CareerViewResponsibility job={job} slug={slug} />
      <CareerForm />
    </>
  );
}
