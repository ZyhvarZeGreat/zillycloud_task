import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

const Dashboard_Tabs = () => {
  return (
    <Tabs
      defaultValue="register-products bg-transparent font-jakarta"
      className=" h-full bg-transparent w-[800px]"
    >
      <TabsList className="grid w-full grid-cols-6">
        <TabsTrigger className=" font-inter" value="register-products">
          Register Products
        </TabsTrigger>
        <TabsTrigger className=" font-inter" value="add-batch">
          {" "}
          Batch Registration
        </TabsTrigger>
        <TabsTrigger className=" font-inter" value="transaction-registration">
          {" "}
          TX Registration
        </TabsTrigger>
      </TabsList>
      <TabsContent value="register-products"></TabsContent>
      <TabsContent value="add-batch"></TabsContent>

      <TabsContent value="transaction-registration"></TabsContent>
    </Tabs>
  );
};

export default Dashboard_Tabs;
