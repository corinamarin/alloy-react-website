import { useEffect } from 'react';
const Page1 = () => {
    useEffect(() => {
        window["alloy"]("sendEvent", {
          renderDecisions: true,
          xdm: {
              web: {
                  webPageDetails: {
                      viewName: "/page1"
                  }
              },
              eventType: "view-change"
          }
      }).then(({decisions = []}) => {
          console.log("scope based decisions for page1 view", decisions);
      });
      }, [])
    return (
        <div>
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
            <p>
                text
            </p>
            <p>
                text
            </p>
        </div>
    )
}

export default Page1;