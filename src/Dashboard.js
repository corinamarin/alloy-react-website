import { useEffect } from 'react';
const Dashboard = () => {
    useEffect(() => {
        window["alloy"]("sendEvent", {
          renderDecisions: true,
          xdm: {
              web: {
                  webPageDetails: {
                      viewName: "dashboard"
                  }
              },
              eventType: "view-change"
          }
      }).then(({decisions = []}) => {
          console.log("scope based decisions for dashboard view", decisions);
      });
      }, [])
    return (
        <div id="dashboard">
            <h1>DASHBOARD</h1>
            <p>
                text22
            </p>
            <p>
                text2
            </p>
            <p>
                text2
            </p>
            <p>
                text2
            </p>
            <p>
                text2
            </p>
            <p>
                text2
            </p>
            <p>
                text
            </p>
            <p>
                text
            </p>
            <p>
                text
            </p>
            <p>
                text
            </p>
        </div>
    )
}

export default Dashboard;