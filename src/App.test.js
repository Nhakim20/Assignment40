import { render, screen, act } from '@testing-library/react';
import { userEvent} from '@testing-library/user-event'
import App from './App';
import axios from 'axios'
import PostSection from './components/PostSection/view'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('render react logo spinning image', () => {
//   render(<App />);
//   const imgElement = screen.getByTestId("image-react");
//   expect(imgElement).toBeInTheDocument();
// });

test('Assignment DAY 40', () => {
    render(<App />);
    // const imgElement = screen.getByTestId("image-react");
    // expect(imgElement).toBeInTheDocument();

    //DOM Test
    expect(screen.queryByText('React Axios GET')).not.toBe(null);
})
    //User Test

    test('render test', async () => {
      const testText = "React Axios POST";
      render(<App/>);

      const input = screen.getByTestId("text-input");

      userEvent.type(input, testText)

      const textElement = await screen.findByText(testText);
      expect(textElement).toBeIntheDocument();
    });

    // API test


jest.mock('axios');

const testText = "React Axios GET";
const errorText = "error";
const mockResponse = {
  data: {
    name : testText
  }
}
const mockError = {
  data: null,
  message: errorText
}
test('renders fact', async () => {
  await act(async () => {
    await axios.get.mockImplementationOnce(() => Promise.resolve(mockResponse));
    render(<App />);
  });
  const textElement = await screen.getByText(testText);
  expect(textElement).toBeIntheDocument();
});
// test('handle error', async () => {
//   await act(async () => {
//     await axios.get.mockImplementationOnce(() => Promise.reject(mockError));
//     render(<PostSection />);
//   });
//   const textElement = await screen.getByText(errorText);
//   expect(textElement).toBeInTheDocument();
// });
