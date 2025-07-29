import { NavigationContainer } from "@react-navigation/native";
import { PortifolioRoutes } from "./portifolio.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <PortifolioRoutes />
    </NavigationContainer>
  );
}