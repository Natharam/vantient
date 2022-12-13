import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Subscribe from '../components/Subscribe';

const renderSubscribeComponent = () => {
  return render(
    <Provider store={store}>
      <Subscribe />
    </Provider>
  );
};

describe('<Subscribe />', () => {
  describe('Teasing subscribe component', () => {
    beforeEach(async () => {
      act(() => {
        renderSubscribeComponent();
      });
    });

    test('render subscribe page with initial props', async () => {
      expect(await screen.findByText('Name')).toBeInTheDocument();
      expect(await screen.findByText('Email')).toBeInTheDocument();
      expect(await screen.findByText('Password')).toBeInTheDocument();
      expect(await screen.findByText('Already have an account?')).toBeInTheDocument();
      expect(await screen.findByText('Login')).toBeInTheDocument();
      expect(await screen.findByText('Subscribe')).toBeInTheDocument();
    });

    test('input > change name', async () => {
      const element = screen.getByLabelText('Name');

      fireEvent.change(element, { target: { value: 'name' } });
      await waitFor(() => {
        expect(element).toHaveValue('hello');
      });
    });

    test('input > change email', async () => {
      const element = screen.getByLabelText('Email');

      fireEvent.change(element, { target: { value: 'email' } });
      await waitFor(() => {
        expect(element).toHaveValue('email');
      });
    });

    test('input > change password', async () => {
      const element = screen.getByLabelText('Password');

      fireEvent.change(element, { target: { value: 'password' } });
      await waitFor(() => {
        expect(element).toHaveValue('password');
      });
    });

    test('input > submit form', async () => {
      const element = screen.getByRole('button', { name: 'Subscribe' });

      fireEvent.click(element);
      await waitFor(() => {
        expect(screen.findByText('')).toBeInTheDocument();
      });
    });

    test('input > submit form', async () => {
      const element = screen.getByRole('link', { name: 'Login' });

      fireEvent.click(element);
      await waitFor(() => {
        expect(element).not.toBeInTheDocument();
      });
    });
  });
});
