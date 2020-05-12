export default ({ app }, inject) => {
  // eslint-disable-next-line
  inject('print', (string) => console.log(string))
}
