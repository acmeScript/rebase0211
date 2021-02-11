export default {
  title: "Example/Button",
  component: MyButton,
  argTypes: {
    backgroundColor: { control: "color" },
    size: { control: { type: "select", options: ["small", "medium", "large"] } }
  }
};
export const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: `<div onClick={handlerClick}> {...props} </div>`
});
//usage
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
  size: "medium"
  //size: 'large
  //size: 'small'
};
