// Import necessary components and packages
import Head from "next/head";
import axios from "axios";

// Define the Page component that receives the image_signed_url prop
function Page({ image_signed_url }) {
    return (
        <>
            {/* Set meta tags for the page title, description, and Open Graph properties */}
            <Head>
                <title>Share Flower</title>
                <meta name="description" content="Sharing flower" key="desc" />

                {/* Open Graph meta tags */}
                <meta property="og:title" content="My flower on m4c" />
                <meta property="og:description" content="Checkout my flower on map4citizens!" />
                <meta property="og:image" content={image_signed_url} />

                {/* Twitter Card meta tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="My flower on m4c" />
                <meta name="twitter:description" content="Checkout my flower on map4citizens!" />
                <meta name="twitter:image" content={image_signed_url} />
            </Head>

            {/* Display the image */}
            <img src={image_signed_url} />
        </>
    );
}

// Define the getServerSideProps function, which runs on the server side when the page is requested
export async function getServerSideProps(context) {
    // Extract the flower_key from the context"s params
    const { flower_key } = context.params;
    let image_signed_url: string;

    try {
        // Send a POST request to the specified API endpoint with the flower_key in the request body
        const response = await axios.post("https://dfvz2uuq63.execute-api.eu-central-1.amazonaws.com/Prod/", {
            path: "/get-signed-url",
            key: flower_key,
        });

        // Extract the signed URL from the response
        image_signed_url = response.data?.signedUrl;
    } catch (error) {
        console.log(error);
    }

    // If the image_signed_url is not available, return a notFound status
    if (!image_signed_url) {
        return {
            notFound: true,
        };
    }

    // Return the image_signed_url as a prop to the Page component
    return { props: { image_signed_url } };
}

export default Page;
