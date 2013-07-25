/*
Language: Manchester OWL 2 Syntax
*/

function (hljs) {

	var IDEN_REGEX = "[a-zA-Z0-9_\\-]+";
  	var IDEN_EMPTY_REGEX = "[a-zA-Z0-9_\\-]*";

	var MANCHESTER_KEYWORDS = {
		keyword: 'Datatype Class ObjectProperty DataProperty AnnotationProperty NamedIndividual ' +
			'Annotations Prefix Ontology Import ' +
			'inverse or and not length minLength maxLength pattern langRange ' +
			'that some only value Self min max exactly ' +
			'EquivalentTo SubClassOf DisjointWith DisjointUnionOf HasKey ' +
			'Domain Range Characteristics SubPropertyOf InverseOf SubPropertyChain ' +
			'Functional InverseFunctional Reflexive Irreflexive Symmetric Asymmetric Transitive ' +
			'Individual Types Facts SameAs DifferentFrom ' +
			'EquivalentClasses DisjointClasses EquivalentProperties DisjointProperties SameIndividual DifferentIndividuals'
	};

	var URIS = [
	    {
	      className: 'uri',
	      begin: '<', end: '>'
	    },
	    {
	      className: 'uri',
	      begin: IDEN_EMPTY_REGEX+ '?\\:'+ IDEN_REGEX
	    }
	  ];

	var SET_OPTS = {
		className: 'literal',
		begin: '{', end: '}'
	};

	var NUMBERS = [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE];

	var MANCHESTER_DEFAULT_CONTAINS = [
		SET_OPTS
	].concat(NUMBERS).concat(URIS);

	return {
		case_insensitive: false,
		keywords: MANCHESTER_KEYWORDS,
		contains: MANCHESTER_DEFAULT_CONTAINS
	};
}