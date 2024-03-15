export default function HocCheck(Component: any, auth:boolean) {
  return function () {
    if (!auth) {
      return <div>User not Authenticated...</div>;
    }
    return <Component />;
  };
}
