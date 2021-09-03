import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("Test that the users feed populates correctly when they submit a post", () => {
  let { queryByTitle } = render(<App />);
  let newUser = queryByTitle("userName");
  let submitName = queryByTitle("submitName");
  fireEvent.change(newUser, { target: { value: "Dan the Man"} });
  fireEvent.click(submitName);

  it('should display feed when a new user is added', async () => {
    await waitFor(() => {
      let welcome = queryByTitle("welcome");
      expect(welcome.innerHTML).toBe("Hi Dan the Man, please post something below!")
    }, 500)
  })
  
  it("should display a new post", async() => {
    await waitFor (() => {
      let inputField = queryByTitle("newPost");
      let btn = queryByTitle("submitPost");
      fireEvent.change(inputField, { target: { value: "went to disneyland" }});
      fireEvent.click(btn);
      let newPost = queryByTitle("went to disneyland");
      expect(newPost.innerHTML).toBe("went to disneyland");
    }, 1000)
  })
})