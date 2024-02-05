function Universe(initlVal, type) {
  this.matter = {
    total: type === "matter" ? initlVal : 0,
    create: (value) => {
      this.matter.total += value;
      this.energy.total -= value;
    },
    destroy: (value) => {
      this.matter.total -= value;
      this.energy.total += value;
    },
  };

  this.energy = {
    total: type === "energy" ? initlVal : 0,
    create: (value) => {
      this.energy.total += value;
      this.matter.total -= value;
    },
    destroy: (value) => {
      this.energy.total -= value;
      this.matter.total += value;
    },
  };
}

module.exports = {
  Universe,
};
