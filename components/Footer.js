function Footer() {
  return (
    //use gap-y-10 instead of space-y-10(collapses a little)
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Vacation-app works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Vacation-app Plus</p>
        <p>Vacation-app Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessability</p>
        <p>Referrals welcome</p>
        <p>Invite your friends</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>How to be a host</p>
        <p>How hosting works</p>
        <p>More than 10,000 hostings</p>
        <p>Be a host now!</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Contact</p>
      </div>
    </div>
  );
}

export default Footer;
