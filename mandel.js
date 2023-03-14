
import { check } from 'k6';
import http from "k6/http";
// export let options = {
//     vus: 5,
//     stages: [
//         { duration: "10s", target: 10 },
//         { duration: "10s", target: 10 },
//         { duration: "10s", target: 3000 },
//         { duration: "10s", target: 0 },
//     ]
// };

export default function() {
    let response = http.get("https://mandel-dev.md-abr-np.k8s.freenet-group.de/v1/common/network/networkDefinitions");
    check(response, {

        'is status 200': (r) => r.status === 200,
    
      });
};

