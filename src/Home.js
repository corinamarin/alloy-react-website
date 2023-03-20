import { useEffect } from 'react';
const Home = () => {

    useEffect(() => {
        window["alloy"]("sendEvent", {
          renderDecisions: true,
          xdm: {
              web: {
                  webPageDetails: {
                      viewName: "home"
                  }
              },
              eventType: "view-change"
          }
      }).then(({decisions = []}) => {
         
      });
      }, [])
    return (
       <div id='home'>
        <h1>HOME</h1>
        <div>
            <p>Some text here</p>
            <p> Some more text</p>
        </div>
        </div>
        
    )
}

export default Home;