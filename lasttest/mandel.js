
import { check } from 'k6';
import http from "k6/http";
 export let options = {
     vus: 5,
     stages: [
         { duration: "10s", target: 10 },
         { duration: "10s", target: 10 },
         { duration: "10s", target: 50 },
         { duration: "10s", target: 0 },
     ],
    thresholds: {
      // the rate of successful checks should be higher than 90%
      checks: ['rate>0.99']  
    },
 };

export default function() {
    let response = http.get("https://mandel-dev.md-abr-np.k8s.freenet-group.de/v1/common/network/networkDefinitions");
    check(response, {

        'is status 200': (r) => r.status === 200,
    
      });
};

