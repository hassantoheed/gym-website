function Membership() {

  const plans = [
    {
      name: "Basic",
      price: "PKR 5,000/mo",
      features: [
        "Gym Access",
        "Locker Room",
        "1 Group Class"
      ],
      recommended: false,
      discount: false,
    },

    {
      name: "Pro",
      price: "PKR 10,000/mo",
      features: [
        "All Classes",
        "Personal Trainer",
        "Diet Plan"
      ],
      recommended: true,
      discount: true,
    },

    {
      name: "Elite",
      price: "PKR 18,000/mo",
      features: [
        "24/7 Access",
        "VIP Lounge",
        "Private Coaching"
      ],
      recommended: false,
      discount: false,
    },
  ];

  return (
    <div>

    </div>
  );
}
export default Membership;