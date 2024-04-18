import Flower from "../components/flower/Flower";
import Layout from "../components/layout";



export default function FlowerPage() {
  return (
    <Layout>
      <div>
        {/* Render the Flower component here */}
        <Flower />
      </div>
    </Layout>
  );
}
