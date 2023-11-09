const express = require("express");
const app = express();
const port = 3100;

// Import the cors middleware
const cors = require("cors");

app.use(express.json());

app.use(cors());

let fleetData = [
];

app.get("/fleets", (req, res) => {
  res.json(fleetData);
});

app.post("/fleets", (req, res) => {
  const newFleet = req.body;

  if (!newFleet || !newFleet.fleet_id || !newFleet.fleet_name || !newFleet.number_drones) {
    return res.status(400).json({ error: "Bad Request: Invalid or missing data" });
  }

  fleetData.push(newFleet);
  res.status(201).json(newFleet);
});


// Endpoint to delete a fleet by fleet_id
app.delete("/fleets/:fleet_id", (req, res) => {
  const fleetIdToDelete = req.params.fleet_id;
  fleetData = fleetData.filter((fleet) => fleet.fleet_id !== fleetIdToDelete);
  res.json({ message: "Fleet deleted" });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
