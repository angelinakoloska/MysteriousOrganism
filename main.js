// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

const pAequorFactory = (num, arr) => {
    return {
        specimenNum: num,
        dna: arr,
        mutate() {
            let i = Math.floor(Math.random() * this.dna.length);
            let newBase = returnRandBase;
            while (this.dna[i] === newBase) {
              newBase = returnRandBase;
            }
            this.dna[i] = newBase;
            return this.dna;
        },
        compareDNA(pAequor) {
          let difference = 0;
          for (let i = 0; i < this.dna.length; i++) {
            if (this.dna[i] === pAequor.dna[i]) {
              difference++;
            }
          }
          difference = (difference / this.dna.length) * 100;
          //console.log(`specimen #${this.dna} and specimen #${pAequor} have ${Number.parseFloat(difference).toFixed(2)}% DNA in common`)
          return difference;
        },
        willLikelySurvive() {
          const cAndG = this.dna.filter(char => char == 'C' || char == 'G')
          if (cAndG.length/this.dna.length >= 0.6) {
            return true;
          } else {
            return false;
          }
        }
    }
}

//console.log (pAequorFactory(4, mockUpStrand()));

let thirtySpecimen = [];
for (let i = 0; i < 30; i++) {
  thirtySpecimen.push(pAequorFactory(i, mockUpStrand()));
}
console.log(thirtySpecimen)



