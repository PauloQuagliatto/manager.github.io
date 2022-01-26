import Header from "../../src/components/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
    </>
  );
};

export async function getStaticProps() {

  return {
    props: {
      protected: true,
    },
  };
}

export default Dashboard;
