import Box from "./components/Box/Box";
import Grid from "./components/Grid/Grid";
import GridRuler from "./components/GridRuler/GridRuler";
import Vertical_Slider from "./components/Vertical_Slider/Slider";

function App(): JSX.Element {
  return (
    <div
      className="App"
      style={{ margin: "16px", position: "relative", height: "100vh" }}
    >
      <GridRuler spacing="sm"></GridRuler>

      <Grid
        container
        spacing="sm"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box 1</Box>
        </Grid>

        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box 2</Box>
        </Grid>

        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box 3</Box>
        </Grid>

        <Grid item xs={1} sm={6} md={4} lg={3}>
          {/* <Box>Box 4</Box> */}
          <Vertical_Slider variant="enabled" min={1} max={100} value={29} step={30}></Vertical_Slider>
        </Grid>
      </Grid>

    </div>
  );
}

export default App;