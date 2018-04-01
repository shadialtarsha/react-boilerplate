import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dotenv from 'dotenv';

Dotenv.config({ path: 'config.test.env' });

Enzyme.configure({
  adapter: new Adapter(),
});
