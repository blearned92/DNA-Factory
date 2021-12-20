// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

const pAequorFactory = (specimenNum, dna) => {
  return({
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      let i = Math.floor(Math.random() * (dna.length - 1));
      const ifA = ['T', 'C', 'G']
      const ifC = ['A', 'T', 'G']
      const ifG = ['A', 'T', 'C']
      const ifT = ['A', 'C', 'G']
      const randomA = ifA[Math.floor(Math.random() * 3)]
      const randomC = ifC[Math.floor(Math.random() * 3)]
      const randomG = ifG[Math.floor(Math.random() * 3)]
      const randomT = ifT[Math.floor(Math.random() * 3)]
      //console.log(dna)
      if(dna[i] === 'A'){
        dna[i] = randomA;
      } else if (dna[i] === 'C'){
        dna[i] = randomC;
      } else if (dna[i] === 'G'){
        dna[i] = randomG;
      } else {
        dna[i] = randomT;
      }
      //console.log(dna)
      return dna
    },
    compareDNA(pAequor){
      let count = 0;
      for(i=0; i<this.dna.length-1; i++){
        if(pAequor.dna[i] === this.dna[i]){
          count += 1;
        }
      }
    console.log(`specimens #${this.specimenNum} and #${pAequor.specimenNum} have ${Math.round((count/15)*100)}% DNA in common`);
  },
  willLikelySurvive(){
    let count = 0;
    for(i=0; i<this.dna.length; i++){
      if(this.dna[i] === 'C' || this.dna[i] === 'G'){
        count++
      }
    }
    if(Math.round((count/this.dna.length)*100) >= 60){
      //console.log('Final Count: ' + count);
      return true
    } else {
        //console.log('Final Count: ' + count);
        return false
    }
  }
  })
};

const pAequorArray = [];
for(i=1; i<31; i++){
  pAequorArray.push(i, mockUpStrand())
}

const strand1 = mockUpStrand()
const strand2 = mockUpStrand()
const strand3 = mockUpStrand()
//console.log(strand1)
//DNA #1
const dna1 = pAequorFactory(1, strand1)
console.log('DNA Strand #1: --- ' + dna1.dna)
const dnaMutated1 = dna1.mutate()
console.log('Mutated Strand #1: ' + dnaMutated1)
console.log('------------------------------------------------')
//DNA #2
const dna2 = pAequorFactory(2, strand2)
console.log('DNA Strand #2: --- ' + dna2.dna)
const dnaMutated2 = dna2.mutate()
console.log('Mutated Strand #2: ' + dnaMutated2)
console.log('------------------------------------------------')
//DNA #3
const dna3 = pAequorFactory(3, strand3)
console.log('DNA Strand #3: --- ' + dna3.dna)
const dnaMutated3 = dna3.mutate()
console.log('Mutated Strand #3: ' + dnaMutated3)
console.log('------------------------------------------------')
//DNA Comparison Function Calls
dna1.compareDNA(dna2)
dna2.compareDNA(dna3)
dna3.compareDNA(dna1)
console.log('------------------------------------------------')
//Survivability Function Calls
console.log('Will it survive?: ' + dna1.willLikelySurvive())
console.log('Will it survive?: ' + dna2.willLikelySurvive())
console.log('Will it survive?: ' + dna3.willLikelySurvive())
console.log('------------------------------------------------')
//30 Surviving Specimens Call
for(i=0; i<pAequorArray.length-1; i++){
  console.log(pAequorArray[i])
}


//random note