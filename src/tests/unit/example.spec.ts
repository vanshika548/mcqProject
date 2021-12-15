import { shallowMount,mount,createLocalVue } from '@vue/test-utils'
import SampleComponent from '@/components/samplecomponent/SampleComponentView.vue';
import { createWrapper } from './TestHelpers';
import { SampeViewComponent } from '@/components/samplecomponent/SampleComponentInterface';
jest.mock('@/utilities/idbUtility', () => {
  return jest.fn().mockImplementation(() => {
    return {readAllData: () => {}};
  });
});

const mockSuccessResponse = {};
const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
const mockFetchPromise:any = Promise.resolve({ // 3
  json: ():any => mockJsonPromise,
});
const localVue = createLocalVue();

window.fetch = jest.fn().mockImplementation(():any => mockFetchPromise);

describe('SampleComponent.vue', () => {
  let handleComponentButtonClick = () => jest.fn();
  const wrapper = shallowMount(SampleComponent, {
    localVue,
    propsData: {key:'res'},
    stubs: ['router-link', 'router-view'],
    mocks: {},
    methods: {handleComponentButtonClick},
  });

  test('is a Vue instance', () => {
      expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('has required classes', () => {
    expect(wrapper.findAll('tr').length).toBe(0);
    expect(wrapper.findAll('table').length).toBe(1);
  }); 

  test('has required classes', () => {
    expect(wrapper.findAll('.uk-button-group').length).toBe(1);
    expect(wrapper.findAll('.uk-button-default').length).toBe(2);
  }); 

  test('private class methods check', () => {
    wrapper.vm.$data.privateMethod = jest.fn((a,b) => {return a + b});
    expect(typeof wrapper.vm).toEqual('object');
    expect(typeof wrapper.vm.$data.privateMethod).toEqual('function');
    expect(wrapper.vm.$data.privateMethod(2,3)).toEqual(5);
  });

  test('triggering via click',() => {
    wrapper.vm.$data.handleComponentButtonClick = jest.fn();
    wrapper.vm.$data.handleComponentButtonClick();
    wrapper.find('.uk-button-default').trigger('click');
    expect(wrapper.vm.$data.handleComponentButtonClick).toHaveBeenCalled();
  })

  test('actual private method call',() => {
    const wrapperNew = createWrapper(SampleComponent);
    const vm: SampeViewComponent = wrapperNew.vm as any;
    expect(vm.privateMethod(2,3)).toEqual(5);
  })
  
})
