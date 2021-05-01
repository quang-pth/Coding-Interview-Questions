// O(n) Time | O(d) Space
function getLowestCommonManager(topManager, reportOne, reportTwo) {
  return getOrgInfo(topManager, reportOne, reportTwo).lowestCommonManager;
}

function getOrgInfo(manager, reportOne, reportTwo) {
  let numImportantReport = 0;
  
  for (const currentReport of manager.directReports) {
    const orgInfo =  getOrgInfo(currentReport, reportOne, reportTwo);
    if (!!orgInfo.lowestCommonManager) {
      return orgInfo;
    } else {
      numImportantReport += orgInfo.numsImportantReport;
    }
  }
  
	if (manager === reportOne || manager === reportTwo) {
    numImportantReport += 1;
  }
	
	const lowestCommonManager = numImportantReport === 2 ? manager : null;
	return new OrgInfo(lowestCommonManager, numImportantReport);
}

class OrgInfo {
  constructor(lowestCommonManager, numImportantReport) {
    this.lowestCommonManager = lowestCommonManager;
    this.numsImportantReport = numImportantReport;
  }
}


class OrgChart {
    constructor(name) {
        this.name = name;
        this.directReports = [];
    }
    addDirectReports(directReports) {
       for (const directReport of directReports) {
         this.directReports.push(directReport);
       }
    }
}

function getOrgCharts() {
  const orgCharts = {};
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  for (const letter of ALPHABET) {
    orgCharts[letter] = new OrgChart(letter);
  }
  return orgCharts;
}

const orgCharts = getOrgCharts();
orgCharts['A'].addDirectReports([orgCharts['B'], orgCharts['C']]);
orgCharts['B'].addDirectReports([orgCharts['D'], orgCharts['E']]);
orgCharts['C'].addDirectReports([orgCharts['F'], orgCharts['G']]);
orgCharts['D'].addDirectReports([orgCharts['H'], orgCharts['I']]);


console.log(getLowestCommonManager(orgCharts.A, orgCharts.E, orgCharts.F));
console.log(getLowestCommonManager(orgCharts.A, orgCharts.E, orgCharts.I));



