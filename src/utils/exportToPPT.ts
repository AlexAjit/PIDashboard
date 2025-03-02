// // import { DashboardData } from '../types';

// // // This is a mock function that would normally use a library like pptxgenjs
// // // to generate a PowerPoint presentation
// // export const exportToPPT = (data: DashboardData): void => {
// //   console.log('Exporting to PowerPoint:', data);
// //   alert('PowerPoint export functionality would be implemented here in a production environment.');
  
// //   // In a real implementation, this would create a PPTX file and trigger download
// // };

// // utils/exportToPPT.ts
// // import { DashboardData } from '../types';

// // export const exportToPPT = async (data: DashboardData): Promise<void> => {
// //   try {
// //     // First, prepare the dashboard data in a format suitable for PowerPoint
// //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
// //     const dashboardContent = prepareDashboardContent(data);
    
// //     // You'll need a library like pptxgenjs for creating PowerPoint files in browser
// //     // Here's an example using that library
// //     // Make sure to install it first: npm install pptxgenjs
// //     const pptxgen = (await import('pptxgenjs')).default;
// //     const pres = new pptxgen();
    
// //     // Add a title slide
// //     const slide1 = pres.addSlide();
// //     slide1.addText("PI Planning Dashboard", { 
// //       x: 1, 
// //       y: 1, 
// //       fontSize: 24,
// //       bold: true 
// //     });
    
// //     // Add metrics slide
// //     const slide2 = pres.addSlide();
// //     slide2.addText("Planning Metrics", { 
// //       x: 1, 
// //       y: 0.5, 
// //       fontSize: 18,
// //       bold: true 
// //     });
    
// //     // Create a table for the metrics
// //     const metricsData = [
// //       ["Metric", "Value"],
// //       ["Total Features", data.totalFeatures.toString()],
// //       ["Planned Feature", data.plannedFeature.toString()],
// //       ["Planned Enabler", data.plannedEnabler.toString()],
// //       ["Spillover Feature", data.spilloverFeature.toString()],
// //       ["Spillover Enabler", data.spilloverEnabler.toString()],
// //       ["Date Feature", data.dateFeature.toString()],
// //       ["Date Enabler", data.dateEnabler.toString()],
// //       ["Business Value Commit", data.businessValueCommit.toString()],
// //       ["Business Value Uncommit", data.businessValueUncommit.toString()],
// //       ["Committed", data.committed.toString()],
// //       ["Uncommitted", data.uncommitted.toString()],
// //       ["Not Planned", data.notPlanned.toString()]
// //     ];
    
// //     slide2.addTable(metricsData, { 
// //       x: 1, 
// //       y: 1, 
// //       w: 8,
// //       fontSize: 12
// //     });
    
// //     // Add cluster theme slide
// //     const slide3 = pres.addSlide();
// //     slide3.addText("Investment Cluster & Strategic Theme", { 
// //       x: 1, 
// //       y: 0.5, 
// //       fontSize: 18,
// //       bold: true 
// //     });
    
// //     // For charts, you would need to capture screenshots or use third-party solutions
// //     // One approach is to use html-to-image to capture DOM elements as images
// //     // This would require additional implementation
    
// //     // Finally, save the presentation
// //     pres.writeFile("PI-Planning-Dashboard.pptx");
    
// //   } catch (error) {
// //     console.error("Error exporting to PowerPoint:", error);
// //     alert("Failed to export to PowerPoint. Please try again.");
// //   }
// // };

// // // Helper function to prepare data
// // function prepareDashboardContent(data: DashboardData) {
// //   // Transform data as needed for PowerPoint
// //   return {
// //     metrics: {
// //       totalFeatures: data.totalFeatures,
// //       plannedFeature: data.plannedFeature,
// //       plannedEnabler: data.plannedEnabler,
// //       // ...other metrics
// //     },
// //     clusterTheme: data.clusterThemeData,
// //     teamData: data.teamData,
// //   };
// // }

// // utils/exportToPPT.ts
// import { DashboardData } from '../types';
// import pptxgen from 'pptxgenjs';

// export const exportToPPT = async (data: DashboardData): Promise<void> => {
//   try {
//     // Create a new presentation
//     const pres = new pptxgen();
    
//     // Add a title slide
//     const slide1 = pres.addSlide();
//     slide1.addText("PI Planning Dashboard", { 
//       x: 1, 
//       y: 1, 
//       fontSize: 24,
//       bold: true 
//     });
    
//     // Add metrics slide
//     const slide2 = pres.addSlide();
//     slide2.addText("Planning Metrics", { 
//       x: 1, 
//       y: 0.5, 
//       fontSize: 18,
//       bold: true 
//     });
    
//     // Create a table for the metrics
//     // Convert string[][] to proper TableRow[] format
//     const metricsData = [
//       [{ text: "Metric" }, { text: "Value" }],
//       [{ text: "Total Features" }, { text: data.totalFeatures.toString() }],
//       [{ text: "Planned Feature" }, { text: data.plannedFeature.toString() }],
//       [{ text: "Planned Enabler" }, { text: data.plannedEnabler.toString() }],
//       [{ text: "Spillover Feature" }, { text: data.spilloverFeature.toString() }],
//       [{ text: "Spillover Enabler" }, { text: data.spilloverEnabler.toString() }],
//       [{ text: "Date Feature" }, { text: data.dateFeature.toString() }],
//       [{ text: "Date Enabler" }, { text: data.dateEnabler.toString() }],
//       [{ text: "Business Value Commit" }, { text: data.businessValueCommit.toString() }],
//       [{ text: "Business Value Uncommit" }, { text: data.businessValueUncommit.toString() }],
//       [{ text: "Committed" }, { text: data.committed.toString() }],
//       [{ text: "Uncommitted" }, { text: data.uncommitted.toString() }],
//       [{ text: "Not Planned" }, { text: data.notPlanned.toString() }]
//     ];
    
//     slide2.addTable(metricsData, { 
//       x: 1, 
//       y: 1, 
//       w: 8,
//       fontSize: 12
//     });
    
//     // Add cluster theme slide
//     const slide3 = pres.addSlide();
//     slide3.addText("Investment Cluster & Strategic Theme", { 
//       x: 1, 
//       y: 0.5, 
//       fontSize: 18,
//       bold: true 
//     });
    
//     // For cluster theme data, create a table
//     const clusterRows = [
//       [{ text: "Cluster Name" }, { text: "Count" }, { text: "Theme" }],
//       ...data.clusterThemeData.map(item => [
//         { text: item.name },
//         { text: item.count.toString() },
//         { text: item.theme }
//       ])
//     ];
    
//     slide3.addTable(clusterRows, {
//       x: 1,
//       y: 1,
//       w: 8,
//       fontSize: 12
//     });
    
//     // Add team data slide
//     const slide4 = pres.addSlide();
//     slide4.addText("Team Distribution", { 
//       x: 1, 
//       y: 0.5, 
//       fontSize: 18,
//       bold: true 
//     });
    
//     // For team data, create a table
//     const teamRows = [
//       [{ text: "Team" }, { text: "Feature Count" }],
//       ...Object.entries(data.teamData).map(([team, count]) => [
//         { text: team },
//         { text: count.toString() }
//       ])
//     ];
    
//     slide4.addTable(teamRows, {
//       x: 1,
//       y: 1,
//       w: 8,
//       fontSize: 12
//     });
    
//     // Finally, save the presentation - using proper WriteFileProps object
//     pres.writeFile({ fileName: "PI-Planning-Dashboard.pptx" });
    
//   } catch (error) {
//     console.error("Error exporting to PowerPoint:", error);
//     alert("Failed to export to PowerPoint. Please try again.");
//   }
// };

import { DashboardData } from '../types';
import pptxgen from 'pptxgenjs';

export const exportToPPT = async (data: DashboardData): Promise<void> => {
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