import http from "k6/http";
import { sleep, check } from "k6";
import runTestOne from "./mandel.js";
import runTestTwo from "./googletest.js";

export default function() {
    runTestOne();
    runTestTwo();
};
