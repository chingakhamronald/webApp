import { FC, ReactNode } from "react";
import Page from "./Page";
import { Toaster } from "sonner";

export default function App() {
  return (
    <ProviderWrapper>
      <Page />
      <Toaster />
    </ProviderWrapper>
  );
}

const ProviderWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};
