"use client";

import useAxios from "@/hooks/useAxios";
import { TransactionByDate } from "@/types/charts";
import { useQuery } from "@tanstack/react-query";

interface GetTransEventChartsQuery {
  datefrom?: string;
  eventid?: string;
}

interface GetTransEventChartResponse {
  data: {
    transactions: TransactionByDate[];
    tickets: TransactionByDate[];
    totalTransactions: TransactionByDate;
    totalTickets: TransactionByDate;
  };
  message: string;
}
const useGetTransEventCharts = (
  queries: GetTransEventChartsQuery,
) => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ["transactioneventchart", queries],
    queryFn: async () => {
      const { data } = await axiosInstance.get<GetTransEventChartResponse>(
        `transactions/chart`,
        { params: queries },
      );
      return data;
    },
  });
};
export default useGetTransEventCharts;
