import { claimTokens, getStatus } from "./contracts";

window.__EVAL__ = {
  claim: async () => {
    try {
      await claimTokens();
      return "CLAIM_SUCCESS";
    } catch (err) {
      return err?.reason || err?.message || "CLAIM_FAILED";
    }
  },

  status: async () => {
    try {
      return await getStatus();
    } catch {
      return "STATUS_ERROR";
    }
  }
};
