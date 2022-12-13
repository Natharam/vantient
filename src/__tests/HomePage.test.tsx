import { act, cleanup, configure, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import HomePage from '../pages/home';

const renderHomePage = () => {
  return render(
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

describe('<HomePage />', () => {
  describe('Teasing home page api failure', () => {
    beforeEach(async () => {
      act(() => {
        renderHomePage();
      });
    });

    afterEach(() => {
      jest.resetAllMocks();
      jest.fn().mockClear();
    });

    afterAll(() => cleanup());

    configure({ asyncUtilTimeout: 5000 });

    test('render home page with initial props', async () => {
      expect(await screen.findByText('Select Date and Travelers')).toBeInTheDocument();
      expect(await screen.findByText('Overview')).toBeInTheDocument();
      expect(await screen.findByText(`What's Included`)).toBeInTheDocument();
      expect(await screen.findByText('Departure & Return')).toBeInTheDocument();
      expect(await screen.findByText('What To Expect')).toBeInTheDocument();
      expect(await screen.findByText('Additional Info')).toBeInTheDocument();
    });

    test('render input > travelers', async () => {
      expect(await screen.findByRole('home-passenger')).toBeInTheDocument();
    });

    test('input > change travelers', async () => {
      expect(await screen.findByRole('home-passenger')).toBeInTheDocument();
    });

    test('render availability times', async () => {
      expect(await screen.findByRole('home-passenger')).toBeInTheDocument();
    });

    test('select availability time', async () => {
      expect(await screen.findByRole('home-passenger')).toBeInTheDocument();
    });
  });

  describe('Teasing home page api failure', () => {
    afterAll(() => cleanup());

    test('render home page when api failure', async () => {
      act(() => {
        renderHomePage();
      });

      expect(
        await screen.findByText(
          'There was some issue loading the page, please try reloading; If the issue persists then try with a new search.'
        )
      ).toBeInTheDocument();
    });
  });
});
