<?php

/* @WebProfiler/Collector/router.html.twig */
class __TwigTemplate_d00945dfd42d1c2de7f8cc280938713a7335703339baf519b64007b97f72410c extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "@WebProfiler/Collector/router.html.twig", 1);
        $this->blocks = array(
            'toolbar' => array($this, 'block_toolbar'),
            'menu' => array($this, 'block_menu'),
            'panel' => array($this, 'block_panel'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@WebProfiler/Profiler/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_f6311c0fdae752f9a4e18ba4d64cb26f7597a78d62db708b7fa3600e6f35032b = $this->env->getExtension("native_profiler");
        $__internal_f6311c0fdae752f9a4e18ba4d64cb26f7597a78d62db708b7fa3600e6f35032b->enter($__internal_f6311c0fdae752f9a4e18ba4d64cb26f7597a78d62db708b7fa3600e6f35032b_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/router.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_f6311c0fdae752f9a4e18ba4d64cb26f7597a78d62db708b7fa3600e6f35032b->leave($__internal_f6311c0fdae752f9a4e18ba4d64cb26f7597a78d62db708b7fa3600e6f35032b_prof);

    }

    // line 3
    public function block_toolbar($context, array $blocks = array())
    {
        $__internal_ad29c9b74e13c7534bed834126a970cf0060df96271155878ff3faac448fa6a5 = $this->env->getExtension("native_profiler");
        $__internal_ad29c9b74e13c7534bed834126a970cf0060df96271155878ff3faac448fa6a5->enter($__internal_ad29c9b74e13c7534bed834126a970cf0060df96271155878ff3faac448fa6a5_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        
        $__internal_ad29c9b74e13c7534bed834126a970cf0060df96271155878ff3faac448fa6a5->leave($__internal_ad29c9b74e13c7534bed834126a970cf0060df96271155878ff3faac448fa6a5_prof);

    }

    // line 5
    public function block_menu($context, array $blocks = array())
    {
        $__internal_e992a6d42d70860425aefa46b9320a6f504c6292b803ed3cfe24fdaaa64f072a = $this->env->getExtension("native_profiler");
        $__internal_e992a6d42d70860425aefa46b9320a6f504c6292b803ed3cfe24fdaaa64f072a->enter($__internal_e992a6d42d70860425aefa46b9320a6f504c6292b803ed3cfe24fdaaa64f072a_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        // line 6
        echo "<span class=\"label\">
    <span class=\"icon\">";
        // line 7
        echo twig_include($this->env, $context, "@WebProfiler/Icon/router.svg");
        echo "</span>
    <strong>Routing</strong>
</span>
";
        
        $__internal_e992a6d42d70860425aefa46b9320a6f504c6292b803ed3cfe24fdaaa64f072a->leave($__internal_e992a6d42d70860425aefa46b9320a6f504c6292b803ed3cfe24fdaaa64f072a_prof);

    }

    // line 12
    public function block_panel($context, array $blocks = array())
    {
        $__internal_ee027e913db1a6e9584c6ccf63956c99ce921fd7ae0a06ced52220beed273e9c = $this->env->getExtension("native_profiler");
        $__internal_ee027e913db1a6e9584c6ccf63956c99ce921fd7ae0a06ced52220beed273e9c->enter($__internal_ee027e913db1a6e9584c6ccf63956c99ce921fd7ae0a06ced52220beed273e9c_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 13
        echo "    ";
        echo $this->env->getExtension('http_kernel')->renderFragment($this->env->getExtension('routing')->getPath("_profiler_router", array("token" => (isset($context["token"]) ? $context["token"] : $this->getContext($context, "token")))));
        echo "
";
        
        $__internal_ee027e913db1a6e9584c6ccf63956c99ce921fd7ae0a06ced52220beed273e9c->leave($__internal_ee027e913db1a6e9584c6ccf63956c99ce921fd7ae0a06ced52220beed273e9c_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Collector/router.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  73 => 13,  67 => 12,  56 => 7,  53 => 6,  47 => 5,  36 => 3,  11 => 1,);
    }
}
/* {% extends '@WebProfiler/Profiler/layout.html.twig' %}*/
/* */
/* {% block toolbar %}{% endblock %}*/
/* */
/* {% block menu %}*/
/* <span class="label">*/
/*     <span class="icon">{{ include('@WebProfiler/Icon/router.svg') }}</span>*/
/*     <strong>Routing</strong>*/
/* </span>*/
/* {% endblock %}*/
/* */
/* {% block panel %}*/
/*     {{ render(path('_profiler_router', { token: token })) }}*/
/* {% endblock %}*/
/* */
