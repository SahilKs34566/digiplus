import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <tecHi />
      <h1 class="title">Student Details</h1>
      <hr />
      <form>
        <label>
          Name:
          <input type="text" name="name" placeholder="name" />
        </label>

        <label>
          CGPA:
          <input type="number" name="name" placeholder="9.5" />
        </label>

        <label>
          Address:
          <input type="text" name="name" />
        </label>

        <button class="But1" type="submit" value="submit">
          SUBMIT
        </button>
        <button class="But2" type="reset" value="reset">
          CANCEL
        </button>
      </form>
    </div>
  );
}

function tecHi() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}
