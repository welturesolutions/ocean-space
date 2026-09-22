import { NextResponse } from "next/server";
import { createClient } from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "100"); // Use query param or default to 100
  const skip = (page - 1) * limit;
  const contentType = searchParams.get("content_type") || "job"; // Default to "job"

  try {
    const entries = await client.getEntries({
      content_type: contentType,
      limit,
      skip,
    });

    const processedEntries = entries.items.map((item) => {
      if (item.fields.primaryAccountabilities) {
        item.fields.primaryAccountabilities = documentToHtmlString(
          item.fields.primaryAccountabilities
        );
      }
      if (item.fields.professionalRequirements) {
        item.fields.professionalRequirements = documentToHtmlString(
          item.fields.professionalRequirements
        );
      }
      return item;
    });

    return NextResponse.json({
      success: true,
      data: processedEntries,
      total: entries.total, // Use Contentful's total for accurate pagination
    });
  } catch (error) {
    console.error("Error fetching Contentful data:", error.message);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch data" },
      { status: 500 }
    );
  }
}
