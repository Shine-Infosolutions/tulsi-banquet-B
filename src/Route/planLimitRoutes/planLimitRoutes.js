const express = require("express");
const router = express.Router();
const {
  getAllPlanLimits,
  getPlanLimit,
  upsertPlanLimit,
  getFormattedLimits,
  initializeDefaults
} = require("../../banquetController/banquetmenuController/planLimitController");

router.get("/get", getAllPlanLimits);
router.get("/formatted", getFormattedLimits);
router.get("/:ratePlan/:foodType", getPlanLimit);
router.post("/", upsertPlanLimit);
router.put("/:id", upsertPlanLimit);
router.post("/initialize", initializeDefaults);
router.delete("/:id", async (req, res) => {
  try {
    const PlanLimit = require("../../model.planLimit/PlanLimit/PlanLimit");
    await PlanLimit.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
