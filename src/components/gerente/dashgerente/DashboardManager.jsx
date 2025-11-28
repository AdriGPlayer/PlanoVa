
import HeaderManager from "./header-manager/HeaderManager";
import QuickActions from "./quickActions/QuickActions";
import AlertSection from "./alert-section/AlertSection"
import StatsGrid from "./statsGrid/StatsGrid";
import ChartSection from "./chart-section/ChartSection";
import EmployeesSection from "./employeesSection/EmployeesSection";
import PendingProjectsSection from "./pending-projects-section/PendingProjectsSection";
import BudgetSection from "./budgetSection/BudgetSection";
import TopButtons from "../../common/TopButtons";
import { useParams } from "react-router-dom";

const DashboardManager = () => {

    const {municipio} = useParams();

    return (

        <div className="dashboard-container-manager">
            
            <TopButtons/>
            <HeaderManager municipio={municipio}  />
            <QuickActions municipio={municipio}/>
            <AlertSection/>
            <StatsGrid/>

            <div className="main-content-manager">
                <ChartSection/>
                <EmployeesSection/>
                <PendingProjectsSection/>
                <BudgetSection/>
            </div>
        </div>
    );
}

export default DashboardManager;
