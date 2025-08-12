import { mount } from '@vue/test-utils';
import Page from '@/pages/reservation.vue';

describe('Reservation page', () => {
  test('mounts properly', () => {
    const wrapper = mount(Page);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders reservation form', () => {
    const wrapper = mount(Page);
    expect(wrapper.find('form').exists()).toBe(true);
  });
});
