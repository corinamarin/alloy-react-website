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
         
      });
      }, [])
    return (
        <div>
            <p>
                text 1 1
            </p>
            <p>
                text 1 1
            </p>
            <p>
                text 1 1
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