import { useEffect } from 'react';
const Page2 = () => {
    useEffect(() => {
        window["alloy"]("sendEvent", {
          renderDecisions: true,
          xdm: {
              web: {
                  webPageDetails: {
                      viewName: "/page2"
                  }
              },
              eventType: "view-change"
          }
      }).then(({decisions = []}) => {
          console.log("scope based decisions for page2 view", decisions);
      });
      }, [])
    return (
        <div>
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

export default Page2;