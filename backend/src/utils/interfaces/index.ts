/**
 * Interfaces types
 */

// User interface
export interface User {
  _id?: string;
  email: string;
  password: string;
}

// Professional interface
export interface Professional {
  name: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  birthDat: string;
  idCard: string;
  isVerified: boolean;
  specialties: string[];
  workplace: string[];
  country: string;
  province: string;
  postalCode: string;
}

// Disease interface
export interface Disease {
  name: string;
  symptoms: string[];
  specificPathologies: string[];
}

// Diagnosis interface
export interface Diagnosis {
  disease: string;
  symptoms: number;
  symptomsMatch: number;
}

/**
 * Login interface
 */

export interface UserLogin {
  email: string;
  password: string;
}

/**
 * JWT interface
 */
export interface JWT {
  accessToken: string;
}

export interface UserJWT {
  sub?: string;
  email: string;
}

export interface IJWT {
  sub: string;
  name: string;
}

// Diagnosis results
export interface IDiagnosisResults {
  idUser: string;
  record: {
    date: string;
    symptomsUser: [string];
    results: {
      diseaseId: string;
    }[];
  };
}

export interface IDiagnosisAnalysis {
  _id?: string;
  idUser: string;
  analysis: {
    diseaseName: string;
    approved: boolean;
    symptomsResults: {
      diseaseSymptoms: string[];
      userSymptoms: string[];
      symptomsMatch: string[];
    };
    pathologies: {
      pathologyName: string;
      pathologyValidation: boolean;
      wasAnalyzed: boolean;
    }[];
  }[];
}

export interface IAnalysis {
  diseaseName: string;
  approved: boolean;
  symptomsResults: {
    diseaseSymptoms: string[];
    userSymptoms: string[];
    symptomsMatch: string[];
  };
  pathologies: {
    pathologyName: string;
    pathologyValidation: boolean;
    wasAnalyzed: boolean;
  }[];
}
export interface IPathologies {
  _id?: string;
  pathologyName: string;
  pathologyValidation: boolean;
  wasAnalyzed: boolean;
}

export interface IDataAnalysis {
  disease: string;
  symptomsPercentMatch: number;
  pathologiesPercentMatch: number;
}

export interface IAnalysisAnswers {
  analysisId: string;
  analysisResults: {
    _id: string;
    pathologyName: string;
    pathologyValidation: boolean;
    wasAnalyzed: boolean;
  };
}

export interface IAnalysisResults {
  _id: string;
  pathologyName: string;
  pathologyValidation: boolean;
  wasAnalyzed: boolean;
}

export interface IProfessionalRecommendation {
  name: string;
  lastName: string;
  specialties: string[];
  medicalCenters: string[];
  country: string;
  province: string;
  description: string;
}
