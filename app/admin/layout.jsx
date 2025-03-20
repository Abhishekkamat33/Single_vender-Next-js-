

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  );
};

export default Layout;
