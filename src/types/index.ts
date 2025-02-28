export interface FilterOptions {
  targetRelease: string;
  team: string;
}

export interface MetricCardProps {
  value: number;
  label: string;
  color?: string;
}

export interface PlanningItem {
  id: string;
  name: string;
  team: string;
  type: string;
  status: string;
  cluster: string;
  theme: string;
  release: string;
}

export interface TeamData {
  name: string;
  features: number;
  enablers: number;
}

export interface ClusterData {
  name: string;
  count: number;
  theme: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}

export interface DashboardData {
  totalFeatures: number;
  plannedFeature: number;
  plannedEnabler: number;
  spilloverFeature: number;
  spilloverEnabler: number;
  dateFeature: number;
  dateEnabler: number;
  businessValueCommit: number;
  businessValueUncommit: number;
  committed: number;
  uncommitted: number;
  notPlanned: number;
  clusterThemeData: ClusterData[];
  teamData: Record<string, number>;
}