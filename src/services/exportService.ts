import { DashboardData } from '../types';
import pptxgen from 'pptxgenjs';

// Export to PowerPoint function
export const exportDashboardToPPT = async (data: DashboardData): Promise<void> => {
  try {
    // Validate data object
    if (!data) {
      throw new Error('Dashboard data is undefined');
    }
    
    console.log('Exporting data to PowerPoint:', data);
    
    // Create a new presentation
    const pres = new pptxgen();
    
    // Add a title slide
    const slide1 = pres.addSlide();
    slide1.addText("PI Planning Dashboard", { 
      x: 1, 
      y: 1, 
      fontSize: 24,
      bold: true 
    });
    
    // Add metrics slide
    const slide2 = pres.addSlide();
    slide2.addText("Planning Metrics", { 
      x: 1, 
      y: 0.5, 
      fontSize: 18,
      bold: true 
    });
    
    // Create a table for the metrics
    const metricsData = [
      [{ text: "Metric" }, { text: "Value" }],
      [{ text: "Total Features" }, { text: String(data.totalFeatures || 0) }],
      [{ text: "Planned Feature" }, { text: String(data.plannedFeature || 0) }],
      [{ text: "Planned Enabler" }, { text: String(data.plannedEnabler || 0) }],
      [{ text: "Spillover Feature" }, { text: String(data.spilloverFeature || 0) }],
      [{ text: "Spillover Enabler" }, { text: String(data.spilloverEnabler || 0) }],
      [{ text: "Date Feature" }, { text: String(data.dateFeature || 0) }],
      [{ text: "Date Enabler" }, { text: String(data.dateEnabler || 0) }],
      [{ text: "Business Value Commit" }, { text: String(data.businessValueCommit || 0) }],
      [{ text: "Business Value Uncommit" }, { text: String(data.businessValueUncommit || 0) }],
      [{ text: "Committed" }, { text: String(data.committed || 0) }],
      [{ text: "Uncommitted" }, { text: String(data.uncommitted || 0) }],
      [{ text: "Not Planned" }, { text: String(data.notPlanned || 0) }]
    ];
    
    slide2.addTable(metricsData, { 
      x: 1, 
      y: 1, 
      w: 8,
      fontSize: 12
    });
    
    // Add cluster theme slide
    const slide3 = pres.addSlide();
    slide3.addText("Investment Cluster & Strategic Theme", { 
      x: 1, 
      y: 0.5, 
      fontSize: 18,
      bold: true 
    });
    
    // For cluster theme data, create a table
    if (data.clusterThemeData && data.clusterThemeData.length > 0) {
      const clusterRows = [
        [{ text: "Cluster Name" }, { text: "Count" }, { text: "Theme" }],
        ...data.clusterThemeData.map(item => [
          { text: item.name || 'N/A' },
          { text: String(item.count || 0) },
          { text: item.theme || 'N/A' }
        ])
      ];
      
      slide3.addTable(clusterRows, {
        x: 1,
        y: 1,
        w: 8,
        fontSize: 12
      });
    } else {
      slide3.addText("No cluster theme data available", { 
        x: 1, 
        y: 1, 
        fontSize: 14 
      });
    }
    
    // Add team data slide
    const slide4 = pres.addSlide();
    slide4.addText("Team Distribution", { 
      x: 1, 
      y: 0.5, 
      fontSize: 18,
      bold: true 
    });
    
    // For team data, create a table
    if (data.teamData && Object.keys(data.teamData).length > 0) {
      const teamRows = [
        [{ text: "Team" }, { text: "Feature Count" }],
        ...Object.entries(data.teamData).map(([team, count]) => [
          { text: team || 'N/A' },
          { text: String(count || 0) }
        ])
      ];
      
      slide4.addTable(teamRows, {
        x: 1,
        y: 1,
        w: 8,
        fontSize: 12
      });
    } else {
      slide4.addText("No team data available", { 
        x: 1, 
        y: 1, 
        fontSize: 14 
      });
    }
    
    // Finally, save the presentation
    pres.writeFile({ fileName: "PI-Planning-Dashboard.pptx" });
    console.log('PowerPoint export successful');
    
  } catch (error) {
    console.error("Error exporting to PowerPoint:", error);
    alert("Failed to export to PowerPoint. Please try again.");
  }
};

// Placeholder for CSV export if needed in the future
export const exportDashboardToCSV = (): void => {
  console.log('CSV export functionality would be implemented here');
  alert('CSV export is currently unavailable. Please use PowerPoint export instead.');
};