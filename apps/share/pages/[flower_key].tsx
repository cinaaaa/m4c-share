import Head from 'next/head';
import axios from "axios";

function Page({ image_signed_url }) {
    return (
        <>
            <Head>
                <title>Share Flower</title>
                <meta name="description" content="Sharing flower" key="desc" />
                <meta property="og:title" content="Social Title for Cool Page" />
                <meta
                    property="og:description"
                    content="And a social description for our cool page"
                />
                <meta
                    property="og:image"
                    content={image_signed_url}
                />
            </Head>
            <img src={image_signed_url} />
        </>
    );
}

export async function getServerSideProps(context: { params: { flower_key: any; }; }) {
    // Fetch image signed url based on key
    const { flower_key } = context.params;
    let image_signed_url: string;
    // send post request to an endpoint with flower_key in the body
    await axios
        .post("https://auys8w4hm1.execute-api.eu-central-1.amazonaws.com/Prod/", {
            path: "/get-signed-url",
            key: flower_key,
        })
        .then((response) => {
            image_signed_url = response.data?.signedUrl;
        })
        .catch((error) => {
            console.log(error);
        });


    if (!image_signed_url) {
        return {
            notFound: true,
        };
    }

    return { props: { image_signed_url } };
}

export default Page;


