import React from "react";
import ReactDOM from "react-dom/client";
import {
  Center,
  ChakraProvider,
  Container,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { GetFlowsSummaryRequest } from "./proto/timescape/v1/flow_pb";
import { FlowServiceClient } from "./proto/timescape/v1/flow_pb.client";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { create } from "zustand";
import { Flow } from "./proto/flow/flow_pb";

const transport = new GrpcWebFetchTransport({
  baseUrl: "http://localhost:8080",
});

interface FlowState {
  flows: Flow[];
  add: (flow: Flow) => void;
}

const useFlowStore = create<FlowState>((set) => ({
  flows: [] as Flow[],
  add: (flow: Flow) => set((state) => ({ flows: [...state.flows, flow] })),
}));

const client = new FlowServiceClient(transport);

const request = GetFlowsSummaryRequest.create({ limit: 5 });

const stream = client.getFlowsSummary(request, {});
for await (let flow of stream.responses) {
  // console.log("got another flow! ", flow.flow?.flow);
  if (flow.flow?.flow) {
    useFlowStore.getState().add(flow.flow?.flow as Flow);
  }
}

const FlowTable = () => {
  const { flows } = useFlowStore();
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Flow id</Th>
            <Th>Source</Th>
            <Th>Destination</Th>
          </Tr>
        </Thead>
        <Tbody>
          {flows.map((flow) => (
            <Tr key={flow.uuid}>
              <Td>{flow.uuid}</Td>
              <Td>{flow.source?.labels[0]}</Td>
              <Td>{flow.destination?.labels[0]}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Center h="100%" w="100%">
        <FlowTable></FlowTable>
      </Center>
    </ChakraProvider>
  </React.StrictMode>
);
