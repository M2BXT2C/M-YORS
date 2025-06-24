import SummaryApi from "../common";

const fetchCategoryWiseProduct = async (category) => {
    // 🚨 Log and validate category input
    console.log("🔍 fetchCategoryWiseProduct received category:", category);

    if (!category || typeof category !== 'string') {
        console.error("❌ Invalid category sent to API:", category);
        return { data: [] }; // fallback to prevent crashing
    }

    try {
        const response = await fetch(SummaryApi.categoryWiseProduct.url, {
            method: SummaryApi.categoryWiseProduct.method,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ category }),
        });

        if (!response.ok) {
            console.error(`❌ API responded with status ${response.status}`);
            return { data: [] };
        }

        const dataResponse = await response.json();
        return dataResponse;

    } catch (error) {
        console.error("❌ Error fetching category products:", error);
        return { data: [] };
    }
};

export default fetchCategoryWiseProduct;
